export default {
    itemCellContainer: {
        grid: {
            display: 'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(300px, 1fr))',
            gap: '10px',
            justifyContent: 'center'
        }
    },
    itemCellPageCoatiner: {

    },
    wishListBtn: {
        major: {
            margin: '50px 5px 10px 5px',
            '& button': {
                width: '100%',
                height: '50px',
            }
        }
    },
    wishModal: {
        major: {
            postion: 'absolute',
            display: 'block',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            zIndex: '1000',
            background: 'blue'
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

