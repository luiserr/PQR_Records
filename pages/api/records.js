import getRecords from '../../app/repositories/records.js';

export default async function handler(req, res) {
  const records = await getRecords();
  res.status(200).json(records);
}