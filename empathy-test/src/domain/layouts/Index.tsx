import * as React from "react";
import { useHistory } from "react-router";
import { HistoryType } from "../../infraestructure/core/models/History";
import { json2array } from "../../infraestructure/core/utils/json-to-array";
import { useRandomTheme } from "../../infraestructure/data/contexts/theme";
import { CoolBox } from "../components/coolBox/CoolBox";
import { LeftHalfScreen } from "../components/halfscreen/HalfScreen";
import { HistoryList } from "../components/historyList/HistoryList";
import { LanguageBox } from "../components/languageBox/LanguageBox";
import { SearchComponent } from "../components/SearchComponent/SearchComponent";

import {
  StyledTitle,
  StyledPrimaryTitleContainer,
} from "../components/title/style";

const Index: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [showHistoryLog, setShowHistoryLog] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const historyBrowser = useHistory();

  const { themeColor } = useRandomTheme();

  const [history, setHistory] = React.useState<HistoryType[]>(
    sessionStorage.getItem("history")
      ? json2array(sessionStorage.getItem("history")).reverse()
      : []
  );

  const updateSessionHistory = async () => {
    sessionStorage.setItem(
      "history",
      JSON.stringify(Object.assign({} as HistoryType, history))
    );
  };

  const onSubmitSearch = async (event) => {
    try {
      if (searchValue && searchValue.trim() != "") {
        setLoading(true);
        historyBrowser.push(`/search=${searchValue}`);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const onClickHistory = async () => {
    setShowHistoryLog(!showHistoryLog);
  };

  const onDeleteHistoryLine = async (id) => {
    try {
      setLoading(true);
      history.splice(id, 1);
      await updateSessionHistory();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const onDeleteHistory = async (id) => {
    try {
      setLoading(true);
      setHistory([]);
      sessionStorage.setItem(
        "history",
        JSON.stringify(Object.assign({} as HistoryType, []))
      );
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LeftHalfScreen>
        <div
          style={{
            width: "100%",
            height: showHistoryLog ? "55rem" : "25rem",
          }}
        >
          <LanguageBox></LanguageBox>
          <div>
            <StyledPrimaryTitleContainer>
              <StyledTitle
                style={{ margin: 0 }}
                color={themeColor && themeColor.primary}
                colorSecondaru={themeColor && themeColor.secondary}
                text={"EMPATHY.CO"}
              >
                EMPATHY.CO
              </StyledTitle>
            </StyledPrimaryTitleContainer>
            <SearchComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onSubmit={onSubmitSearch}
              onClickHistory={onClickHistory}
              loading={loading}
              showHistoryButton={history.length > 0}
            ></SearchComponent>
            {showHistoryLog && (
              <div style={{ width: "100%" }}>
                <CoolBox>
                  <HistoryList
                    dataSource={history}
                    onDelete={onDeleteHistoryLine}
                  ></HistoryList>
                </CoolBox>
              </div>
            )}
          </div>
        </div>
      </LeftHalfScreen>
    </>
  );
};

export default Index;
