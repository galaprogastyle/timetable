import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import List from "@vkontakte/vkui/dist/components/List/List";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

const osName = platform();

const Persik2 = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={
        <HeaderButton onClick={props.go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </HeaderButton>
      }
    >
      Знаменатель
    </PanelHeader>

    <Group title="Понедельник">
      <List>
        <Div>
          <InfoRow title="12:40 - 14:15 • Аудитория 0007"></InfoRow>
          Надежность ИС (Практика)
        </Div>
        <Div>
          <InfoRow title="14:30 - 16:00 • Аудитория 0007"></InfoRow>
          Надежность ИС (Лекция)
        </Div>
        <Div>
          <InfoRow title="16:10 - 17:40 • Аудитория 0003"></InfoRow>
          Методы и средства проектирования ИСиТ (Лекция)
        </Div>
      </List>
    </Group>
    <Group title="Вторник">
      <List>
        <Div>
          <InfoRow title="09:00 - 10:35 • Аудитория 2026"></InfoRow>
          Стандартизация, сертификация и управление качеством программного
          обеспечения (Практика)
        </Div>
        <Div>
          <InfoRow title="10:50 - 12:25 • Аудитория 0007"></InfoRow>
          Стандартизация, сертификация и управление качеством программного
          обеспечения (Лекция)
        </Div>
        <Div>
          <InfoRow title="12:40 - 14:15 • Аудитория 2004"></InfoRow>
          Управление большими данными (Лекция)
        </Div>
      </List>
    </Group>
    <Group title="Среда">
      <List>
        <Div>
          <InfoRow title="09:00 - 10:35 • Аудитория 2018"></InfoRow>
          Автоматизированные системы управления производством (Практика)
        </Div>
        <Div>
          <InfoRow title="10:50 - 12:25 • Аудитория 2018"></InfoRow>
          Автоматизированные системы управления производством (Практика)
        </Div>
      </List>
    </Group>
    <Group title="Четверг">
      <List>
        <Div>
          <InfoRow title="14:30 - 16:00 • Аудитория 0003"></InfoRow>
          Инструментальные средства информационных систем (Лекция)
        </Div>
        <Div>
          <InfoRow title="16:10 - 17:40 • Аудитория 0003"></InfoRow>
          Инструментальные средства информационных систем (Практика)
        </Div>
        <Div>
          <InfoRow title="18:30 - 20:00 • Аудитория 0003"></InfoRow>
          Методы и средства проектирования ИСиТ (Практика)
        </Div>
      </List>
    </Group>
  </Panel>
);

Persik2.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Persik2;
