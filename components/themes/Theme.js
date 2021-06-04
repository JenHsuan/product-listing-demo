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
            position: 'relative'
        }
    },
    wishListBtn: {
        major: {
            margin: '50px 5px 10px 5px',
            '& button': {
                width: '100%',
                height: '50px'
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
            height: '460px',
            zIndex: '1000',
            background: '#fff',
            border: '3px solid black',
            transform: 'translate(-50%, 0)',
            '& > .modal-title': {
                fontSize: '18px',
                margin: '0 40px',
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
                margin: '0 50px',
                overflowY: 'scroll',
                border: '1px solid black',
                height: '300px',
                '& .content-field': {
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 15px',
                    '> .close-btn': {
                        width: '10px',
                        height: '10px',
                        margin: '15px 0 15px auto',
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
            opacity: 0.5
        }
    },
    itemCell: {
        demoContainer: {
            margin: 'auto'
        },
        contentBody: {
            width: '300px',
            height: '550px',
            background: '#ffffff',
            border: '1px solid gray',
            borderRadius: '3px',
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
                    color: '#6c6c6c'
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
            '&:hover .left-indicator': {
                opacity: 0.7,
            },
            '&:hover .right-indicator': {
                opacity: 0.7,
            },
            '& > img': {
                height: '100%',
            },
            '& > .left-indicator': {
                width: '15%',
                height: '15%',
                position: 'absolute',
                top: '50%',
                left: '-5%',
                background: '#fff',
                zIndex: '1000',
                transform: 'translate(0, -50%)',
                opacity: 0,
                transition: '0.7s',
                borderRadius: '3px',
                cursor: 'pointer',
                margin: 0
            },
            '& > .right-indicator': {
                width: '15%',
                height: '15%',
                position: 'absolute',
                top: '50%',
                left: '105%',
                background: '#fff',
                zIndex: '1000',
                transform: 'translate(-100%, -50%)',
                opacity: 0,
                transition: '0.7s',
                borderRadius: '3px',
                cursor: 'pointer',
                margin: 0
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
            '&:hover .left-indicator': {
                opacity: 0.7,
            },
            '&:hover .right-indicator': {
                opacity: 0.7,
            },
            '& > img': {
                height: '100%',
            },
            '& > .left-indicator': {
                width: '15%',
                height: '15%',
                position: 'absolute',
                top: '50%',
                left: '-5%',
                background: '#fff',
                zIndex: '1000',
                transform: 'translate(0, -50%)',
                opacity: 0,
                transition: '0.7s',
                borderRadius: '3px',
                cursor: 'pointer',
                margin: 0
            },
            '& > .right-indicator': {
                width: '15%',
                height: '15%',
                position: 'absolute',
                top: '50%',
                left: '105%',
                background: '#fff',
                zIndex: '1000',
                transform: 'translate(-100%, -50%)',
                opacity: 0,
                transition: '0.7s',
                borderRadius: '3px',
                cursor: 'pointer',
                margin: 0
            }
        },
        starContainer: {
            display: 'inline-block',
            width: '30px',
            margin: '10px 10px 0 0',
            '& > img': {
                width: '100%',
            }
        },
        heartContainer: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: '15px',
            width: '30px',
           '& > img': {
               width: '100%',
               cursor:'pointer'
            }
        }
    }
};

