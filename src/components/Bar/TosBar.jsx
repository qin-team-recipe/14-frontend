import { BarWithBackLink } from "./BarWithBackLink";

export function TosBar(props) {
  return <BarWithBackLink href="/settings" title="利用規約" {...props} />;
}
