import { Divider, Icon } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";

export const HeroInfoBar = () => {
  return (
    <div className="heroInfoBarContainer">
      <div className="infoWrapper">
        <span className="infoBarIcon">
          <Icon>
            <LocalShippingOutlinedIcon />
          </Icon>
        </span>
        <div className="infoWrapperCol-2">
          <div className="infoBarTitle">Free Shipping</div>
          <div className="infoBarParagraph">When you spend $80 or more</div>
        </div>
      </div>
      <Divider orientation="vertical" variant="fullWidth" />
      <div className="infoWrapper">
        <span className="infoBarIcon">
          <Icon>
            <TextsmsRoundedIcon />
          </Icon>
        </span>
        <div className="infoWrapperCol-2">
          <div className="infoBarTitle">We are available 24/7</div>
          <div className="infoBarParagraph">Need help? Contact us anytime</div>
        </div>
      </div>
      <Divider orientation="vertical" variant="fullWidth" />
      <div className="infoWrapper">
        <span className="infoBarIcon">
          <Icon>
            <ReplayRoundedIcon />
          </Icon>
        </span>
        <div className="infoWrapperCol-2">
          <div className="infoBarTitle">Satisfied or return</div>
          <div className="infoBarParagraph">Easy 30-day return policy</div>
        </div>
      </div>
      <Divider orientation="vertical" variant="fullWidth" />
      <div className="infoWrapper">
        <span className="infoBarIcon">
          <Icon>
            <CreditCardRoundedIcon />
          </Icon>
        </span>
        <div className="infoWrapperCol-2">
          <div className="infoBarTitle">100% secure payments</div>
          <div className="infoBarParagraph">
            Visa, Mastercard, Stripe, PayPal
          </div>
        </div>
      </div>
    </div>
  );
};
