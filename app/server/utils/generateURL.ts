// export function generateURL(url: string, request: Request) {
//   return process.env.BASE_API_URL + url;
// }
export async function generateURL(url: string, request: Request) {
  const responseURL = `${process.env.BASE_API_URL}/${process.env.DATABASE_URL}/${url}`;
  const replaceURL = responseURL.replace("https://", "").replaceAll("//", "/");
  return `https://${replaceURL}`;
}
