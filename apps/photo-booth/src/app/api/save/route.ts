import * as fs from 'node:fs';

export async function POST(request: Request) {
  const requestBody = await request.json();
  try {
    // save the file to the file system
    const image = requestBody.image;
    const fileName = requestBody.fileName;
    const filePath = `/tmp/photos/${fileName}`;
    const fileData = image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = new Buffer(fileData, "base64");
    fs.writeFileSync(filePath, buffer);
    console.log("file saved to", filePath);
    return new Response(JSON.stringify({file: filePath}), { status: 200 });
  } catch (e) {
    console.error("error in POST /save", e);
    return new Response("error", { status: 500 });
  }
}
