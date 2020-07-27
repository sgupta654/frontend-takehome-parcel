/** @jsx jsx */

import { Button } from "../Button/Button.component";
import { getLSGems } from "./GemFinderApp.library";
import { Gem } from "../Gem/Gem.component";
import { GemForm } from "../GemForm/GemForm.component";
import { List } from "../List/List.component";
import ls from 'local-storage';
import React from "react";
import { sendAPIQuery } from "../../utils/api/api";

import { css, jsx } from '@emotion/core';
import { useCallback, useEffect, useState } from "react";

import { appHeaderStyles,
         savedStyles, 
         savedHeaderStyles,
         savedButtonStyles, 
         searchResultsStyles,
         searchResultsHeaderStyles } from "./GemFinderApp.library";

const GemFinderApp = () => {
  const [userQuery, setUserQuery] = useState("");
  const [searchedGems, setSearchedGems] = useState([]);
  const [savedGems, setSavedGems] = useState(getLSGems);
  const [viewSavedGems, setViewSavedGems] = useState(false);

  const addSavedGem = useCallback(
    (gem) => {
      let newSavedGems;
      setSavedGems(oldGems => {
        if(oldGems.findIndex(g => g.name === gem.name) === -1) {
          newSavedGems = [...oldGems, gem];
          ls.set("savedGems", JSON.stringify(newSavedGems));
          return [...oldGems, gem];
        } else {
          alert(gem.name + " already saved!");
          return oldGems;
        }
      });
    },
    [setSavedGems],
  );

  const removeSavedGem = useCallback(
    (gem) => {
      setSavedGems(oldGems => {
        let newGemsSaved = oldGems.filter(g => g.name !== gem.name);
        ls.set("savedGems", JSON.stringify(newGemsSaved));
        return newGemsSaved;
      });
    },
    [setSavedGems],
  )

  const parseGems = useCallback(
    (gems) => {
      let parsedGems = gems.map((gem) => {
        return {
          id: gem.name,
          name: gem.name,
          version: gem.version,
          saved: savedGems.some(g => g.name === gem.name)
        }
      });

      setSearchedGems(parsedGems);
    },
    [setSearchedGems],
  );

  const sendQuery = useCallback(async () => {
    const apiGems = await sendAPIQuery("search.json?query=", userQuery);
    parseGems(apiGems);
  },
  [userQuery]);


  const renderSearchGemOption = useCallback((gemProps) => {
    return(
      <Gem key={gemProps.id} onClick={addSavedGem} {...gemProps} />
    )
  });

  const renderGemOption = useCallback((gemProps) => {
    return(
      <Gem key={gemProps.id} onClick={removeSavedGem} {...gemProps} />
    )
  });

  return (
    <>
      <div css={appHeaderStyles}>
        <GemForm css={css`
            margin-left: 1rem;
          `} 
          onChange={setUserQuery}
          onSubmit={sendQuery} 
          query={userQuery} 
        />
        <Button css={savedButtonStyles}
        onClick={() => {setViewSavedGems(true)}}
        >View Saved Gems</Button>
      </div>
      <div css={searchResultsStyles}>
        <div css={searchResultsHeaderStyles}>Search Results: {searchedGems.length}</div>
        <List id="searchedGemsList" renderOption={renderSearchGemOption} options={searchedGems} />
      </div>
      <div css={savedStyles(viewSavedGems)}>
        <div css={savedHeaderStyles}>Saved Gems: {savedGems.length}</div>
        <List id="savedGemsList" renderOption={renderGemOption} options={savedGems} />
      </div>
    </>
  )
};

export default GemFinderApp;