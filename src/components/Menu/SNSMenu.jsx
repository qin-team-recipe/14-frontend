import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandTwitter,
  IconLink,
} from "@tabler/icons-react";
import { MenuItemContainer } from "./MenuItemContainer";
import { MenuTest } from "./MenuTest";

// TODO: Linkのhrefに正しいリンクを指定する
export function SNSMenu() {
  return (
    <MenuTest
      items={[
        {
          type: "item",
          key: "tiktok",
          component: (
            <MenuItemContainer icon={IconBrandTiktok}>
              <Link href="#">TikTok</Link>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "twitter",
          component: (
            <MenuItemContainer icon={IconBrandTwitter}>
              <Link href="#">Twitter</Link>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "facebook",
          component: (
            <MenuItemContainer icon={IconBrandFacebook}>
              <Link href="#">Facebook</Link>
            </MenuItemContainer>
          ),
        },
        {
          type: "divider",
          key: "divider1",
        },
        {
          type: "item",
          key: "hogehoge",
          component: (
            <MenuItemContainer icon={IconLink}>
              <Link href="#">hogehoge.com</Link>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "foobar",
          component: (
            <MenuItemContainer icon={IconLink}>
              <Link href="#">foobar.com</Link>
            </MenuItemContainer>
          ),
        },
      ]}
    />
  );
}
