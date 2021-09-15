import * as React from "react";
import { StyledLanguageBox, StyledLanguageContainer } from "./style";
import i18n from "i18next";
import EN from "../../assets/images/en.svg";
import ES from "../../assets/images/es.svg";

export const LanguageBox: React.FC = () => {
  const [language, setLanguage] = React.useState<"es" | "en">("en");

  const onChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <>
      <StyledLanguageContainer>
        <StyledLanguageBox>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => onChangeLanguage("en")}
          >
            <img src={EN} height={30} width={35}></img>
          </div>
          <div
            style={{ marginLeft: 5, cursor: "pointer" }}
            onClick={() => onChangeLanguage("es")}
          >
            <img src={ES} height={20} width={25}></img>
          </div>
        </StyledLanguageBox>
      </StyledLanguageContainer>
    </>
  );
};
