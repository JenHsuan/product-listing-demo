import { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`

export default {
    itemCellContainer: {
        grid: {
            postion: 'relative',
            display: 'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(300px, 1fr))',
            gap: '10px',
            justifyContent: 'center'
        }
    },
    itemCellPageContainer: {
        major: {
            position: 'relative',
            background: '#fff',
            overflowX: 'hidden',
            margin: '50px 0'
        }
    },
    scrollIndicator: {
        major: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            position: 'fixed',
            background: '#6c6c6c',
            border: '1pz solid #fff',
            zIndex: '100',
            opacity: 0.5,
            left: '100%',
            top: '80%',
            transform: 'translate(-110%, -400%)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 700,
            '&:hover': {
                opacity: 0.9
            }
        }
    },
    wishListBtn: {
        major: {
            margin: '50px 5px 10px 5px',
            '& button': {
                width: '100%',
                height: '50px',
                fontFamily: 'Open Sans',
                fontSize: '18px',
                fontWeight: 700,
                color: '#6c6c6c',
                cursor: 'pointer'
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
                cursor: 'pointer'
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
                fontFamily: 'Open Sans',
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
                cursor: 'pointer'
            },
            '& > .wish-list-table': {
                margin: '0 auto',
                overflowY: 'scroll',
                border: '1px solid black',
                borderRadius: '3px',
                height: '300px',
                width: '90%',
                '& .content-field': {
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 15px',
                    '> .close-btn': {
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
                        width: '60px',
                        height: '40px',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '5px 20px 5px 10px',
                        position: 'relative',
                        borderRadius: '3px',
                        '& > img': {
                            height: '100%',
                        }
                    },
                    '& > .portrait-image-container': {
                        width: '48px',
                        height: '40px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0',
                        position: 'relative',
                        borderRadius: '3px',
                        '& > img': {
                            height: '100%',
                        }
                    },
                    '& .content-title': {
                        fontFamily: 'Open Sans',
                        fontSize: '14px',
                        display: 'inline-block'
                    },
                    '& .content-final-price': {
                        fontFamily: 'Open Sans',
                        fontSize: '14px',
                        margin: '0 5px'
                    }
                }
            },
            '& > .total-price': {
                fontSize: '16px',
                position: 'absolute',
                left: '100%',
                marginTop: '5px',
                transform: 'translate(-110%, 0)',
                width: '200px',
                fontFamily: 'Open Sans',
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
            margin: 0
        }
    },
    itemCell: {
        demoContainer: {
            margin: 'auto'
        },
        contentBody: {
            width: '300px',
            height: '520px',
            background: '#ffffff',
            borderRaduis: '5px',
            position: 'relative',
            '&:hover': {
                boxShadow: '2px black'
            },
            '& .content-title': {
                fontFamily: 'Open Sans',
                fontSize: '20px',
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
                    fontSize: '28px',
                    margin: '0 15px'
                },
                '& .content-regular-price': {
                    fontFamily: 'Open Sans',
                    fontSize: '12px',
                    margin: '0 5px',
                    color: '#6c6c6c',
                    textDecoration: 'line-through'
                }
            }
        },
        landScapeImageContainer: {
            width: '300px',
            height: '250px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            margin: '0',
            position: 'relative',
            borderRadius: '5px',
            border: '1px solid #6c6c6c',
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
            '& > .left-indicator': {
                width: '10%',
                height: '12%',
                position: 'absolute',
                top: '50%',
                left: '0',
                background: '#fff',
                zIndex: '1000',
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
                width: '10%',
                height: '12%',
                position: 'absolute',
                top: '50%',
                left: '100%',
                background: '#fff',
                zIndex: '1000',
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
            width: '300px',
            height: '250px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            margin: '0',
            position: 'relative',
            borderRadius: '5px',
            border: '1px solid #6c6c6c',
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
            '& > .left-indicator': {
                width: '10%',
                height: '12%',
                position: 'absolute',
                top: '50%',
                left: '0%',
                background: '#fff',
                zIndex: '1000',
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
                width: '10%',
                height: '12%',
                position: 'absolute',
                top: '50%',
                left: '100%',
                background: '#fff',
                zIndex: '1000',
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
            left: '78%',
            top: '100%',
            transform: 'translate(-110%, -300%)',
            width: '200px',
           '& > .starContainer': {
                display: 'inline-block',
                width: '20px',
                margin: '10px 10px 0 0',
                '& > img': {
                    width: '100%',
                }
            },
        },
        heartContainer: {
            width: '30px',
            position: 'absolute',
            left: '100%',
            top: '100%',
            transform: 'translate(-110%, -200%)',
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
                padding: '.8em 1em',
                position: 'absolute',
                left: '-410%',
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
        },
        slideTip: {
            position: 'relative',
            background: 'blue',
            display: 'block',
            height: '30px',
            left: '-200px',
            width: '200px'
        }
    }
};

