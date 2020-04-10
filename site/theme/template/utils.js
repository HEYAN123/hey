
import flattenDeep from "lodash/flattenDeep";
import flatten from "lodash/flatten";

// 获取本地网页路径
export function getLocalizedPathname(path, zhCN, hash) {
  const pathname = path.startsWith("/") ? path : `/${path}`;
  let fullPath;
  if (!zhCN) {
    // to enUS
    fullPath = /\/?index-cn/.test(pathname) ? "/" : pathname.replace("-cn", "");
  } else if (pathname === "/") {
    fullPath = "/index-cn";
  } else if (pathname.endsWith("/")) {
    fullPath = pathname.replace(/\/$/, "-cn/");
  } else {
    fullPath = `${pathname}-cn`;
  }

  if (hash) {
    const localHash = hash[zhCN ? "zhCN" : "enUS"];
    fullPath += `#${localHash}`;
  }
  return fullPath;
}

export function getMetaDescription(jml = []) {
  const COMMON_TAGS = ["h1", "h2", "h3", "p", "img", "a", "code", "strong"];
  if (!Array.isArray(jml)) {
    return "";
  }
  const paragraph = flattenDeep(
    jml
      .filter(item => {
        if (Array.isArray(item)) {
          const [tag] = item;
          return tag === "p";
        }
        return false;
      })
      // ['p', ['code', 'aa'], 'bb'] => ['p', 'aabb']
      .map(item => {
        const [tag, ...others] = flatten(item);
        const content = others
          .filter(other => typeof other === "string" && !COMMON_TAGS.includes(other))
          .join("");
        return [tag, content];
      }),
  ).find(p => p && typeof p === "string" && !COMMON_TAGS.includes(p));
  return paragraph;
}

export function isZhCN(pathname) {
  return /-cn\/?$/.test(pathname);
}
