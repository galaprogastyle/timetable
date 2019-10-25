import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Footer from "@vkontakte/vkui/dist/components/Footer/Footer";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import "./main.css";
import persik from "../img/persik.png";
const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>ИС-1601</PanelHeader>
    {fetchedUser && (
      <Group title="Приветствую тебя,">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ""
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
      </Group>
    )}

    <Group title="Расписание">
      <Div>
        <Button
          size="l"
          className="button"
          level="2"
          onClick={go}
          data-to="persik"
        >
          Числитель - Нечетная неделя
        </Button>
      </Div>
      <Div>
        <Button
          size="l"
          className="button"
          level="2"
          onClick={go}
          data-to="persik2"
        >
          Знаменатель - Четная неделя
        </Button>
      </Div>
    </Group>
    <Group title="Скоро новые функции!">
      <img className="inline2" src={persik} alt="Persik The Cat" />
    </Group>
    <Footer>Alexeev Inc.</Footer>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

export default Home;
