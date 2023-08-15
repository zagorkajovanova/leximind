import {Box, Button, Modal, Typography} from "@mui/material";

export function AnswerModal({open, handleModalClose, title, description, finishGame}) {
    return <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
                {description}
            </Typography>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                {finishGame ?
                    (<Button variant="outlined" onClick={() => {
                        handleModalClose();
                        finishGame();
                     }
                }>Затвори</Button>) :

                    (<Button variant="outlined" onClick={handleModalClose}>Затвори</Button>)

                }
            </div>
        </Box>
    </Modal>
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
};