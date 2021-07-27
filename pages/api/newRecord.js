import repository from '../../app/repositories/newRecord';
import dniTypes from '../../app/config/dniTypes';
import {PATH_RECORD}  from '../../app/const';
import getRecords from '../../app/repositories/records.js';

export default async function handler(req, res) {
  const body = req.body;
  const uid = body?.uid;
  const fileName = body?.fileName;
  const dniTypeNumber = body?.dniType ?? 1;
  const dni = body?.dni;
  const phone = body?.phone;
  const filePath = `${PATH_RECORD}${fileName}`;
  const dniTypeSlug = dniTypes[dniTypeNumber];
  if (await repository(fileName, filePath, uid, dniTypeSlug, dni, phone)) {
    const records = await getRecords();
    req.io.emit('getRecords', records);
    return res.status(200).json({success: true});
  }
  return res.status(200).json({success: false});
}