import {Fragment, useEffect, useState} from "react";
import { useQuery } from "react-query";
import Modal from 'react-modal';

import {getCats} from "../../api/getCats";

import { Container, List, Item, Image } from "./styled";

import Button from "../../components/Button";

Modal.setAppElement('#root');

function Cats() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalImgUrl, setModalImgUrl] = useState<string>("");

    const {data, isFetching, refetch} = useQuery(["cats"], getCats, {
        refetchOnWindowFocus: false, // 페이지 새로고침 방지
    });

    const refresh = () => refetch();

    const handleOpenModal = (url: string) => {
        setModalImgUrl(url);
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setModalImgUrl("");
        setIsOpen(false);
    };


    return (
        <Container>
            <h2 style={{marginTop: 50}}>고양이들🐱</h2>

            <Button onClick={refresh} margin="8px">새로고침</Button>
            {isFetching && <div>로딩중...🙀</div>}
            {!isFetching&& data && (
            <List>
                {data.map(({ id, url }, index) => {
                    if (index > 8) return <Fragment key={id} />;
                    const itemClick = () => handleOpenModal(url);

                    return (
                        <Item key={id} onClick={itemClick}>
                            <Image src={url} alt={id} objectFit="cover"/>
                        </Item>
                    );
                })} 
            </List>
            )}
            <Modal 
                isOpen={isOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={handleCloseModal}
                style={{
                    content: {
                        overflow: "hidden",
                    },
                }}
            >
                <Image src={modalImgUrl} alt="modal-img" objectFit="contain" />
            </Modal>
        </Container>
    )
}

export default Cats;