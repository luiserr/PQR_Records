import repository from '../../app/repositories/fileRecord';
import getRecords from '../../app/repositories/records.js';

export default async function handler(req, res) {
  const id = req.body?.id;
  if (await repository(id)) {
    const records = await getRecords();
    req.io.emit('getRecords', records);
    return res.status(200).json({success: true});
  }
  return res.status(200).json({success: false});
}