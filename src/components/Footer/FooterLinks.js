/* eslint-disable */
import React, { useEffect, useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import Footer from "components/Footer/Footer.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-pro-react/components/footerLinksStyle.js";
import classNames from "classnames";
import {
    grayColor,
    roseColor,
    primaryColor,
    secondaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    blackColor,
    whiteColor,
    twitterColor,
    facebookColor,
    googleColor,
    linkedinColor,
    pinterestColor,
    youtubeColor,
    tumblrColor,
    behanceColor,
    dribbbleColor,
    redditColor,
    instagramColor,
    hexToRgb
  } from "assets/jss/material-kit-pro-react.js";
const useStyles = makeStyles(styles);

const footerLinkArr = [
    {content:'Token Contract',href:'https://etherscan.io/address/0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83'},
    // {content:'CoinMarketCap',href:'https://coinmarketcap.com/zh/currencies/yearn-finance-ii/'},
    // {content:'CoinGecko',href:'https://www.coingecko.com/en/coins/dfi-money'},
    {content:'Forum',href:'https://gov.yfii.finance/'},
    {content:'Voting',href:'https://snapshot.page/#/dfi'},
    {content:'Documentation',href:'https://docs.yfii.finance/'},
    {content:'Uniswap ETH-YFII',href:'https://app.uniswap.org/#/swap?outputCurrency=0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83'},
];

export default function FooterLinks(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const color = props.color;
    const badgeClasses = classNames({
        [classes.container]: true,
        [classes.fixed]: props.fixed,
    });

    //留着控制底部联系方式的颜色
    const iconGroundStyle={
        width:'40px',
        height:'40px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize: "1.25rem",
        borderRadius: "1.25rem",
        color:'white',
        backgroundColor:primaryColor[0],
    }

    const iconColorStyle={
        fontSize: "24px",
        color: "#fff"
    }

    return (
        <div className={badgeClasses}>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Button
                    color={color}
                    className={
                        classes.navLink + " " + classes.socialIconsButton
                    }
                    href="https://twitter.com/DfiMoney"
                    target="_blank"
                    >
                    <i
                        style={iconColorStyle}
                        className={
                        "yfiiicon yfii-twitter"
                        }
                    />
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                    color={color}
                    className={
                        classes.navLink + " " + classes.socialIconsButton
                    }
                    href="https://t.me/yfiifinance"
                    target="_blank"
                    >
                    <i
                        style={iconColorStyle}
                        className={
                        "yfiiicon yfii-telegram"
                        }
                    />
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                    color={color}
                    className={
                        classes.navLink + " " + classes.socialIconsButton
                    }
                    href="https://discord.gg/XQ4wnmz"
                    target="_blank"
                    >
                    <i
                        style={iconColorStyle}
                        className={
                        "yfiiicon yfii-discord"
                        }
                    />
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                    color={color}
                    className={
                        classes.navLink + " " + classes.socialIconsButton
                    }
                    href="https://github.com/yfii/vault"
                    target="_blank"
                    >
                    <i
                        style={iconColorStyle}
                        className={
                        "yfiiicon yfii-github"
                        }
                    />
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                    color={color}
                    className={
                        classes.navLink + " " + classes.socialIconsButton
                    }
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    >
                    <i
                        style={iconColorStyle}
                        className={
                        "yfiiicon yfii-wechat"
                        }
                    />
                    </Button>
                    <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    >
                    <Avatar variant="square" alt="YFII" src={require(`../../images/wechat.png`)} style={{width: "80px", height: "80px"}}/>
                    </Popover>
                </ListItem>
            </List>
            <List className={classes.linkList}>
                {
                    footerLinkArr.map((item)=>{
                        return (
                            <ListItem key={item.content} className={classes.linkItem}>
                                <a className={classes.extraContent} href={item.href} target="_blank">{item.content}</a>
                            </ListItem >
                        )
                    })
                }
            </List>
        </div>
    )
}

FooterLinks.defaultProps = {
    color: "transparent",
    fixed:false
  };
  
FooterLinks.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    fixed: PropTypes.bool,
};
  