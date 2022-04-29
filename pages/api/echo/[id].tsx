export default function getById(req, res) {
  res.json({ userId: req.query.id });
}
