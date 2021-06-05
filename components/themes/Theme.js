export default {
    itemCellContainer: {
        grid: {
            postion: 'relative',
            display: 'grid',
            gap: '1vw',
            justifyContent: 'center',
            '@media screen and (max-width:768px)': {
                gridTemplateColumns:'auto auto',
            },
            '@media screen and (max-width:1024px) and (min-width:768px)': {
                gridTemplateColumns:'auto auto auto',
            },
            '@media screen and (min-width:1024px)': {
                gridTemplateColumns:'auto auto auto auto',
            },
        }
    },
    itemCellPageContainer: {
        major: {
            position: 'relative',
            overflowX: 'hidden',
            margin: '0',
            padding: '0'
        }
    },
    wishListBtn: {
        major: {
            margin: '0 0 0 0',
            '& button': {
                width: '100%',
                height: '50px',
                fontFamily: 'Open Sans',
                fontSize: '18px',
                fontWeight: 700,
                background: '#6c6c6c',
                color: '#fff',
                cursor: 'pointer',
                '&:hover': {
                    background: '#000'
                }
            }
        }
    },
    wishListModal: {
        empty: {
            position: 'fixed',
            display: 'block',
            top: '100px',
            left: '50%',
            width: '70%',
            height: '220px',
            zIndex: '1000',
            background: '#fff',
            border: '3px solid black',
            transform: 'translate(-50%, 0)',
            '& > .empty-remind': {
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px'
            },
            '> .close-btn': {
                width: '50px',
                height: '50px',
                display: 'flex',
                margin: '15px 15px 15px auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                cursor: 'pointer',
                fontSize: '18px',
                borderRaduis: '5px',
                background: '#6c6c6c',
                color: '#fff',
                border: 'none',
                '&:hover': {
                    background: '#000'
                }
            }
        },
        major: {
            position: 'fixed',
            display: 'block',
            top: '100px',
            left: '50%',
            width: '70%',
            height: '520px',
            zIndex: '1000',
            background: '#fff',
            border: '3px solid black',
            transform: 'translate(-50%, 0)',
            '& > .modal-title': {
                fontSize: '18px',
                margin: '0 0 1vh 4vw',
                fontFamily: 'YahooSansCond, YahooSans, sans-serif',
                fontWeight: 700
            },
            '> .close-btn': {
                width: '50px',
                height: '50px',
                display: 'flex',
                margin: '15px 15px 15px auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                cursor: 'pointer',
                background: '#6c6c6c',
                color: '#fff',
                border: 'none',
                '&:hover': {
                    background: '#000'
                }
            },
            '& > .wish-list-table': {
                margin: '0 auto',
                overflowY: 'scroll',
                border: '1px solid rgb(241, 241, 245)',
                borderRadius: '3px',
                height: '300px',
                width: '90%',
                '& .content-field': {
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 15px',
                    flexDirection: 'row',
                    width: '100%',
                    '> .close-btn': {
                        flex: '1 1 auto',
                        width: '10%',
                        height: '10%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '12ßpx',
                        cursor: 'pointer',
                        background: '#fff',
                        border: 'none'
                    },
                    '& > .landscape-image-container': {
                        flex: '1 1 auto',
                        width: '60px',
                        height: '40px',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '5px 20px 5px 10px',
                        position: 'relative',
                        borderRadius: '3px',
                        '& > img': {
                            borderRadius: '3px',
                            height: '100%',
                        }
                    },
                    '& > .portrait-image-container': {
                        flex: '1 1 auto',
                        width: '60px',
                        height: '40px',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '5px 20px 5px 10px',
                        position: 'relative',
                        borderRadius: '3px',
                        '& > img': {
                            borderRadius: '3px',
                            height: '100%',
                        }
                    },
                    '& > .content-title': {
                        flex: '1 2 auto',
                        fontFamily: 'YahooSansCond, YahooSans, sans-serif',
                        fontSize: '16px',
                        width: '200px',
                        fontWeight: 500,
                        textAlign: 'left'
                    },
                    '& > .content-final-price': {
                        flex: '1 1 auto',
                        fontFamily: 'YahooSansCond, YahooSans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        width: '100px',
                        textAlign: 'left'
                    }
                }
            },
            '& > .total-price': {
                fontSize: '16px',
                left: '100%',
                margin: '1vh 0 0 4vw',
                paddingRight: '20px',
                fontFamily: 'YahooSansCond, YahooSans, sans-serif',
                fontWeight: 500
            }
        },
        backModal: {
            position: 'fixed',
            display: 'block',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '100',
            background: '#000',
            opacity: 0.5,
            margin: 0,
            zIndex: '100'
        }
    },
    itemCell: {
        demoContainer: {
            margin: 'auto'
        },
        contentBody: {
            width: '180px',
            height: '320px',
            background: '#ffffff',
            borderRaduis: '5px',
            position: 'relative',
            border: '1px solid rgb(241, 241, 245)',
            margin: ' 0 0 40px 0',
            '&:hover': {
                boxShadow: '2px black'
            },
            '& .content-title': {
                fontFamily: 'Open Sans',
                fontSize: '14px',
                margin: '10px 15px'
            },
            '& .content-field': {
                display: 'flex',
                alignItems: 'center',
                margin: '10px 15px',
                '& .content-description': {
                    fontFamily: 'Open Sans',
                    fontSize: '12px',
                    color: '#6c6c6c',
                    display: 'inline-block'
                },
                '& .content-final-price': {
                    fontFamily: 'Open Sans',
                    fontWeight: '700',
                    fontSize: '20px',
                    margin: '0'
                },
                '& .content-onsales-price': {
                    fontFamily: 'Open Sans',
                    fontWeight: '700',
                    fontSize: '20px',
                    color: 'rgb(255, 77, 82)',
                    margin: '0'
                },
                '& .content-regular-price': {
                    fontFamily: 'Open Sans',
                    fontSize: '14px',
                    margin: '0 5px',
                    color: '#6c6c6c',
                    textDecoration: 'line-through'
                }
            }
        },
        landScapeImageContainer: {
            width: '180px',
            height: '150px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0',
            borderRadius: '5px',
            border: '1px solid rgb(241, 241, 245)',
            '&:hover .left-indicator': {
                opacity: 0.7,
            },
            '&:hover .right-indicator': {
                opacity: 0.7,
            },
            '& > img': {
                height: '100%',
            },
            '& > img:hover': {
                '-ms-transform': 'scale(1.2)',
                '-webkit-transform': 'scale(1.2)', /* Safari 3-8 */
                transform: 'scale(1.2)',
                transitionDuration: '0.5s',
                background: 'rgb(247, 248, 255)'
            },
            '& > .on-sales-label': {
                position: 'absolute',
                zIndex: '10',
                top: '140px',
                left: '0',
                background: 'rgb(255, 77, 82)',
                paddingRight: '20px',
                paddingLeft: '10px',
                display: 'inline-block',
                color: '#fff',
                fontSize: '12px',
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px'
            },
            '& > .left-indicator': {
                width: '12%',
                height: '7%',
                position: 'absolute',
                top: '25%',
                left: '0',
                background: '#fff',
                zIndex: '10',
                transform: 'translate(0, -50%)',
                opacity: 0,
                transition: '0.7s',
                border: '1px solid black',
                borderRadius: '50%',
                cursor: 'pointer',
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            '& > .right-indicator': {
                width: '12%',
                height: '7%',
                position: 'absolute',
                top: '25%',
                left: '100%',
                background: '#fff',
                zIndex: '10',
                transform: 'translate(-100%, -50%)',
                opacity: 0,
                transition: '0.7s',
                border: '1px solid black',
                borderRadius: '50%',
                cursor: 'pointer',
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        },
        portraitImageContainer: {
            width: '180px',
            height: '150px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0',
            borderRadius: '5px',
            border: '1px solid rgb(241, 241, 245)',
            '&:hover .left-indicator': {
                opacity: 0.7,
            },
            '&:hover .right-indicator': {
                opacity: 0.7,
            },
            '& > img': {
                width: '100%',
            },
            '& > img:hover': {
                '-ms-transform': 'scale(1.5)',
                '-webkit-transform': 'scale(1.5)', /* Safari 3-8 */
                transform: 'scale(1.5)',
                transitionDuration: '0.5s',
                background: 'rgb(247, 248, 255)'
            },
            '& > .on-sales-label': {
                position: 'absolute',
                zIndex: '10',
                top: '140px',
                left: '0',
                background: 'rgb(255, 77, 82)',
                paddingRight: '20px',
                paddingLeft: '10px',
                display: 'inline-block',
                color: '#fff',
                fontSize: '12px',
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px'
            },
            '& > .left-indicator': {
                width: '12%',
                height: '7%',
                position: 'absolute',
                top: '25%',
                left: '0%',
                background: '#fff',
                zIndex: '10',
                transform: 'translate(0, -50%)',
                opacity: 0,
                transition: '0.7s',
                border: '1px solid black',
                borderRadius: '50%',
                cursor: 'pointer',
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            '& > .right-indicator': {
                width: '12%',
                height: '7%',
                position: 'absolute',
                top: '25%',
                left: '100%',
                background: '#fff',
                zIndex: '10',
                transform: 'translate(-100%, -50%)',
                opacity: 0,
                transition: '0.7s',
                border: '1px solid black',
                borderRadius: '50%',
                cursor: 'pointer',
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        },
        starsContainer: {
            position: 'absolute',
            left: '75%',
            top: '93%',
            transform: 'translate(-80%, -120%)',
            width: '150px',
           '& > .starContainer': {
                display: 'inline-block',
                width: '15px',
                margin: '2px 2px 0 0',
                '& > img': {
                    width: '100%',
                }
            },
            '& .content-stars': {
                fontFamily: 'Open Sans',
                fontSize: '14px',
                margin: '0 5px',
                color: '#6c6c6c'
            }
        },
        heartContainer: {
            width: '20px',
            position: 'absolute',
            left: '100%',
            top: '100%',
            transform: 'translate(-110%, -110%)',
            background: 'rgba(247, 248, 255, 0.95)',
            borderRadius: '50%',
           '& > img': {
               width: '100%',
               cursor: 'pointer',
               position: 'relative',
            },
            '&:before': {
                content: 'attr(data-tooltip)',
                background: 'rgba(247, 248, 255, 0.95)',
                color: 'rgb(35, 42, 49)',
                padding: '.28em 1em',
                position: 'absolute',
                left: '-630%',
                fontSize: '12px',
                fontFamily: 'Open Sans',
                fontWeight: '700',
                borderRadius: '3px',
                marginLeft: '14px',
                whiteSpace: 'pre',
                display: 'none'
            },
            '&:hover': {
                cursor: 'pointer',
                '&:before, &:after': {
                  opacity: 1,
                  display: 'block'
                }
            }
        }
    }
};

