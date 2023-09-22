import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandTwitter,
  IconLink,
} from "@tabler/icons-react";
import { Menu } from "./Menu";

// TODO: Linkのhrefに正しいリンクを指定する
export function SNSMenu() {
  return (
    <Menu
      items={[
        {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconBrandTiktok,
          text: "TikTok",
        },
        {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconBrandTwitter,
          text: "Twitter",
        },
        {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconBrandFacebook,
          text: "Facebook",
        },
        { type: "divider" },
        {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconLink,
          text: "hogehoge.com",
        },
        {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconLink,
          text: "foobar.com",
        },
      ]}
    />
  );
}
