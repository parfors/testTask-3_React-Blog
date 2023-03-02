import React from "react";
import {
  PlaceholderImgStyled,
  PlaceholderImgWrapper,
  PlaceholderTitleStyled,
  ContainerStyled,
  PlaceholderTextStyled,
  PlaceholderSpanStyled,
} from "components";
import catImg from "../../images/placeholder.jpg";

export default function HomePlaceholder() {
  return (
    <ContainerStyled>
      <PlaceholderTitleStyled>Добро пожаловать</PlaceholderTitleStyled>
      <PlaceholderTextStyled>
        Вы на странице одного из моих тестовых заданий. Проект не стилизирован,
        его задачай было продемонстрировать мои навыки владение следующими
        технологиями:{" "}
        <PlaceholderSpanStyled>
          React, React Router, Redux, StyleComponents, Node.js, Express,
          MongoDB.
        </PlaceholderSpanStyled>
      </PlaceholderTextStyled>
      <PlaceholderTextStyled>
        В проекте реализовано FrontEnd и BackEnd части. Выполнена маршруризация
        (публичные и закрытые маршруты), используется Redux с настроиным
        persistom. В задании содержится функционал запроса и отображения статтей
        по категориям, выполнена динамическая пагинация (отображения по 5, 10,
        15, 20 статтей на странице). Регистрация и логинизация выполнена с
        использованием JWT. После логинизации появляется возможность добавления
        и удаления своих постов. При добавлении поста реализована возможность
        подгрузить файл обложки (бесплатный ресурс деплоя блокирует эту
        функцию).
      </PlaceholderTextStyled>
      <PlaceholderTextStyled>Спасибо за внимание,</PlaceholderTextStyled>
      <PlaceholderTextStyled>
        С уважением Супрун Александр
      </PlaceholderTextStyled>
      <PlaceholderTextStyled>
        P.S. Техзадание было написано на русском языке, поэтому проект также
        выполнен на русском.
      </PlaceholderTextStyled>
      <PlaceholderImgWrapper>
        <PlaceholderImgStyled src={catImg} />
      </PlaceholderImgWrapper>
    </ContainerStyled>
  );
}
