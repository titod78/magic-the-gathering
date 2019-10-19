import config from "../config/config";

export async function getMtgData(page = 1, name = "") {
  const data = await fetch(
    `${config.mtgUrl}?page=${page}&pageSize=${config.pageSize}&name=${name}&colors=${config.colors}&contains=${config.contains}`
  );
  return data.json();
}
