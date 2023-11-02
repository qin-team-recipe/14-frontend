import { BarWithBackLink } from "./BarWithBackLink";

export function SettingsBar(props) {
  return <BarWithBackLink href="/fav" title="設定" {...props} />;
}
