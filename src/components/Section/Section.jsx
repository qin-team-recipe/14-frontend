import { SectionHeader } from "./SectionHeader";

export function Section({ children, ...sectionHeaderProps }) {
  if (!sectionHeaderProps.text) {
    throw new Error("text props is required");
  }

  return (
    <div className="space-y-4">
      <SectionHeader {...sectionHeaderProps} />
      <div>{children}</div>
    </div>
  );
}
