import {
  IconArrowUpRight,
  IconChevronRight,
  IconLogout,
  IconAlertCircle,
} from "@tabler/icons-react";
import { SettingsBar } from "@/components/Bar";
import { ButtonBlock, LinkBlock } from "./_components";

// 設定画面
export default function Settings() {
  return (
    <div>
      <div className="px-4 py-3 border-b">
        <SettingsBar />
      </div>
      <div className="space-y-8 pt-5">
        {/* 利用規約・お問い合わせエリア */}
        <ListContainer title="利用規約や問い合わせ">
          <LinkBlock
            icon={<IconChevronRight size={24} stroke={1.5} />}
            href="/settings/tos"
          >
            利用規約
          </LinkBlock>
          <LinkBlock icon={<IconChevronRight size={24} stroke={1.5} />}>
            プライバシーポリシー
          </LinkBlock>
          <LinkBlock icon={<IconArrowUpRight size={24} stroke={1.5} />}>
            運営会社
          </LinkBlock>
          <LinkBlock icon={<IconArrowUpRight size={24} stroke={1.5} />}>
            お問い合わせ
          </LinkBlock>
        </ListContainer>

        {/* ログアウトエリア */}
        <ListContainer title="アカウントの操作">
          <LinkBlock icon={<IconLogout size={24} stroke={1.5} />}>
            ログアウト
          </LinkBlock>
        </ListContainer>

        {/* 退会エリア */}
        <ListContainer title="取り消しができない操作">
          <ButtonBlock icon={<IconAlertCircle size={24} stroke={1.5} />}>
            退会する
          </ButtonBlock>
        </ListContainer>
      </div>
    </div>
  );
}

function ListContainer({ children, title }) {
  return (
    <div className="space-y-3">
      <h2 className="px-4 font-bold">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
