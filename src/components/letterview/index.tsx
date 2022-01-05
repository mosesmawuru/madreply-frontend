import {
  Badge,
  HeaderActions,
} from "components/mylettercard/mylettercard.styled";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";

import { Div, Text } from "styles/globals.styled";
import {
  Action,
  Actions,
  AvatarDiv,
  CommentPart,
  CommentUserInfo,
  LetterViewDiv,
} from "./letterview.styled";
import { getMyInfo } from "utils/getMyInfo";

const LetterViewCard = ({ data }: any) => {
  const [state, setState] = useState<any>({});
  useEffect(() => {
    setState(getMyInfo());
  }, []);
  return (
    <LetterViewDiv>
      <HeaderActions style={{ justifyContent: "flex-end" }}>
        <Badge>{data.stateFlag === 0 ? "PUBLIC" : "PRIVATE"}</Badge>
        {state.email === data.from && (
          <>
            <GrEdit onClick={() => {}} />
            <RiDeleteBinLine onClick={() => {}} />
          </>
        )}
      </HeaderActions>
      <Div justifyContent="space-between" mt={30}>
        <Text fSize={18} fWeight={500}>
          To,
          <br />
          {data.to}
        </Text>
        <Text fSize={18} fWeight={500}>
          Date: {data.date}
        </Text>
      </Div>
      <Div mt={40}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.htmlText,
          }}
        ></div>
      </Div>
      <Text mt={40} fSize={18} fWeight={500}>
        From,
        <br />
        {data.from}
      </Text>
      {state.email !== data.from && (
        <Actions>
          <Action>
            <Text fColor="#5C5C5C">
              <BsHandThumbsUp />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Recommend
            </Text>
          </Action>
          <Action>
            <Text fColor="#5C5C5C">
              <BsHandThumbsDown />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Opposite
            </Text>
          </Action>
          <Action>
            <Text fColor="#5C5C5C">
              <BiComment />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Comment
            </Text>
          </Action>
          <Action>
            <Text fColor="#5C5C5C">
              <FiFlag />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Report
            </Text>
          </Action>
        </Actions>
      )}

      <CommentPart>
        <CommentUserInfo>
          <AvatarDiv>
            <FiUser />
          </AvatarDiv>
          <div>
            <Text fSize={24} fWeight={500}>
              Lorem Ipsum
            </Text>
            <Text fSize={18} mt={5}>
              @loremip
            </Text>
          </div>
        </CommentUserInfo>
        <Div mt={30}>
          Sesame snaps pudding marshmallow chocolate cake toffee cookie ice
          cream tiramisu cake. Liquorice croissant jelly lemon drops jelly beans
          apple pie pudding caramels donut. Cotton candy jujubes danish cookie
          chocolate bar apple pie. Wafer croissant topping jelly bear claw
          liquorice. Shortbread soufflé marshmallow icing macaroon macaroon
          dragée. Cookie halvah bear claw gummi bears croissant tiramisu donut
          cookie. Marzipan bear claw lollipop ice cream icing candy candy canes.
          Cake muffin powder jujubes gingerbread.Marzipan bear claw lollipop ice
          cream icing candy candy canes. Cake muffin powder jujubes gingerbread.
        </Div>
      </CommentPart>
    </LetterViewDiv>
  );
};

export default LetterViewCard;
