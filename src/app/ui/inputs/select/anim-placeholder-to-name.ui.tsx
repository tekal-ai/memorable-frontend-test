import { CSSProperties, FC } from "react";

export const PlaceholderToNameAnimUI: FC<{
  isShow: boolean;
  name: string;
  isNameUsedAsPlaceholder?: boolean;
  placeholder: string;
}> = ({ name, isShow, placeholder, isNameUsedAsPlaceholder = false }) => {
  if (!name) return <></>;
  const placeholderPosition = "14px 18px";
  const namePosition = "6px -9px";
  const placeholderOpacity = "0.8";
  const commonStyle: CSSProperties = {
    zIndex: "76",
    position: "absolute",
    transition: "all 0.3s ease",
    top: "0",
    left: "0",
  };
  const nameAsPlaceholderLabel = (
    <div
      style={{
        opacity: isShow ? 1 : placeholderOpacity,
        translate: isShow ? namePosition : placeholderPosition,
        ...commonStyle,
      }}
    >
      <small>{isShow ? name : placeholder}</small>
    </div>
  );
  const nameLabel = (
    <div
      style={{
        opacity: 1,
        translate: namePosition,
        ...commonStyle,
      }}
    >
      <small>{name}</small>
    </div>
  );
  const placeholderLabel = (
    <div
      style={{
        display: isNameUsedAsPlaceholder ? "none" : "block",
        opacity: isShow ? 0 : placeholderOpacity,
        translate: placeholderPosition,
        ...commonStyle,
      }}
    >
      <small>{placeholder}</small>
    </div>
  );
  return (
    <div className="pointer-events-none relative pt-4">
      {isNameUsedAsPlaceholder && nameAsPlaceholderLabel}
      {!isNameUsedAsPlaceholder && nameLabel}
      {placeholderLabel}
    </div>
  );
};
