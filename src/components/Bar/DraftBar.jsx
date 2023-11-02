import { BarWithBackLink } from "./BarWithBackLink";

export function DraftBar(props) {
  return <BarWithBackLink href="/my-recipe/new" title="下書き" {...props} />;
}
