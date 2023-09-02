import {
  IconArrowUpRight,
  IconChevronRight,
  IconLogout,
} from "@tabler/icons-react";
import { SettingBar } from "@/components/Bar";
import { CancelBlock, LinkBlock } from "./_components";

// 設定画面
export default function Setting() {
  return (
    <div>
      <div className="px-4 py-3">
        <SettingBar />
      </div>
      <div className="space-y-8 pt-5">
        {/* 利用規約・お問い合わせエリア */}
        <div className="space-y-3 px-4">
          <h2 className="font-bold">利用規約や問い合わせ</h2>
          <div className="py-3">
            <LinkBlock icon={<IconChevronRight />} href="/settings/tos">
              利用規約
            </LinkBlock>
          </div>
          <div className="py-3">
            <LinkBlock icon={<IconChevronRight />}>
              プライバシーポリシー
            </LinkBlock>
          </div>
          <div className="py-3">
            <LinkBlock icon={<IconArrowUpRight />}>運営会社</LinkBlock>
          </div>
          <div className="py-3">
            <LinkBlock icon={<IconArrowUpRight />}>お問い合わせ</LinkBlock>
          </div>
        </div>

        {/* ログアウトエリア */}
        <div className="space-y-3 px-4">
          <h2 className="font-bold">アカウントの操作</h2>
          <div className="py-3">
            <LinkBlock icon={<IconLogout />}>ログアウト</LinkBlock>
          </div>
        </div>

        {/* 退会エリア */}
        <div className="space-y-3 px-4">
          <h2 className="font-bold">取り消しができない操作</h2>
          <div className="py-3">
            <CancelBlock>退会する</CancelBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
