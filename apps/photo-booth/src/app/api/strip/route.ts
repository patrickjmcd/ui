import sharp from 'sharp';
import TemplateImage from '../../../../public/Template.png';
import { getDefaultPrinter, print } from 'unix-print';

export async function POST(request: Request) {
  const requestBody = await request.json();
  try {
    const { fileNames } = requestBody;
    if (fileNames.length !== 4) {
      return new Response('must use 4 images for a strip', { status: 400 });
    }

    const stripFileName = `/tmp/strips/${Date.now()}.jpg`;
    const printFileName = `/tmp/prints/${Date.now()}.jpg`;
    const imageFile = `http://localhost:3000${TemplateImage.src}`;
    const image = await fetch(imageFile);
    const buffer = await image.arrayBuffer();

    const baseImage = sharp(buffer);

    const images = await Promise.all(
      fileNames.map(async (fileName: string) => {
        return await sharp(fileName)
          .resize(540, 405)
          .toBuffer({ resolveWithObject: true });
      })
    );

    const composites = images.map((image, index) => {
      return {
        input: image.data,
        top: 30 * (index + 1) + index * 405,
        left: 30,
      };
    });
    const compositeImage = baseImage.composite(composites);
    await compositeImage.toFile(stripFileName);
    // save the file to the file system
    console.log('strip saved to', stripFileName);

    const doubledTemplate = sharp(stripFileName).resize(1200, 1800);
    const fileToPrint = doubledTemplate.composite([
      { input: await compositeImage.toBuffer(), left: 0, top: 0 },
      { input: await compositeImage.toBuffer(), left: 600, top: 0 },
    ]);
    await fileToPrint.toFile(printFileName);

    // save the file to the file system
    console.log('print saved to', printFileName);

    const defaultPrinter = await getDefaultPrinter();
    console.log('sending to default printer', defaultPrinter);
    await print(printFileName, defaultPrinter?.printer);

    return new Response(
      JSON.stringify({ file: stripFileName, printFileName }),
      {
        status: 200,
      }
    );
  } catch (e) {
    console.error('error in POST /save', e);
    return new Response('error', { status: 500 });
  }
}
