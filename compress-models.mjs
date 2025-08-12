import fs from 'fs';
import path from 'path';
import { NodeIO } from '@gltf-transform/core';
import { draco, textureCompress } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';

const modelsDir = path.resolve('./public/models');

const io = new NodeIO().registerDependencies({
  'draco3d.encoder': await draco3d.createEncoderModule(),
});

async function compressModel(inputPath, outputPath) {
  const doc = io.read(inputPath);

  // هذه الطريقة القديمة في API 4.x:
  await doc.transform(
    draco({
      method: 'edgebreaker',
      encodeSpeed: 1,
      decodeSpeed: 5,
      quantizePosition: 14,
      quantizeNormal: 10,
      quantizeTexCoord: 12,
    }),
    textureCompress({
      encoder: 'toktx',
      targetFormat: 'ktx2',
      etc1s: { quality: 64 },
      mipmaps: true,
    })
  );

  io.write(outputPath, doc);
  console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
}

async function processAllModels() {
  if (!fs.existsSync(modelsDir)) {
    console.error(`❌ مجلد النماذج غير موجود: ${modelsDir}`);
    return;
  }

  const files = fs
    .readdirSync(modelsDir)
    .filter((file) => file.endsWith('.glb') || file.endsWith('.gltf'));

  if (files.length === 0) {
    console.log('⚠️ لا يوجد ملفات GLB أو GLTF في المجلد.');
    return;
  }

  for (const file of files) {
    const inputPath = path.join(modelsDir, file);
    const outputPath = path.join(
      modelsDir,
      file.replace(/\.gltf?$/, '-compressed.glb')
    );
    await compressModel(inputPath, outputPath);
  }
}

processAllModels();
