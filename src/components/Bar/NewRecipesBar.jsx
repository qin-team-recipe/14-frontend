import { BarWithBackLink } from "./BarWithBackLink";

export function NewRecipesBar(props) {
  return <BarWithBackLink href="/fav" title="新着レシピ" {...props} />;
}
