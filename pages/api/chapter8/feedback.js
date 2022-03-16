import fs from "fs";
import path from "path";
function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "chapter8", "feedback.json");
}
function extractFeedback(path) {
  const fileData = fs.readFileSync(path);
  const data = JSON.parse(fileData);
  return data;
}
function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
