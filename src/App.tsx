import React from 'react';
import {Counter} from './features/counter/Counter';
import {Route, Routes} from "react-router-dom";
import {FrHomePage} from "./app/pages/FrHomePage/FrHomePage";
import {FrTopicListPage} from "./app/pages/FrTopicListPage/FrTopicListPage";
import {BUTTON_TEXT, THEME} from "./app/shared/core/constant";
import {FrTopicDetailPage} from "./app/pages/FrTopicDetailPage/FrTopicDetailPage";
import {useAppDispatch} from "./app/hooks";
import {loadTopicListAsync} from "./app/data-flow/topic/topicSlice";
import {FrHeader} from "./app/pages/components/FrHeader/FrHeader";
import {UiOops} from "./app/shared/components/UiOops/UiOops";

function App() {
  const errorLink = {text: BUTTON_TEXT.home, link: '/'}

  const dispatch = useAppDispatch();
  dispatch(loadTopicListAsync());

  return (
    <div className="fr-main"
         data-theme={THEME.dark}>
      <FrHeader/>
      <main className="fr-main__body">
        <Routes>
          <Route path="/" element={<FrHomePage/>}/>
          <Route path="/topics" element={<FrTopicListPage/>}/>
          <Route path="/topics/:id" element={<FrTopicDetailPage/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="*" element={<UiOops to={errorLink} globalError={true}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

