import { MyRecipeMenu } from "@/components/Menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";

export function EditRecipe({ isPublished, setIsPublished }) {
  //handleClickで公開非公開を切り替える
  const handleClick = () => {
    setIsPublished((prevState) => !prevState);
  };
  return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IconDotsCircleHorizontal stroke={1.5} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <MyRecipeMenu
              status={isPublished && "public"}
              handleClick={handleClick}
            />
          </DropdownMenuContent>
        </DropdownMenu>
  );
}
