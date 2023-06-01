import {useEffect, useState} from "react";
import { useQuery } from "react-query";
import Modal from 'react-modal';

import {getCats} from "../../api/getCats";

import { Container, List, Item, Image } from "./styled";

import Button from "../../components/Button";

Modal.setAppElement('#root');

function Cats() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const {data, isFetching, refetch} = useQuery(["cats"], getCats);

    const refresh = () => refetch();

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);


    return (
        <Container>
            <h2 style={{marginTop: 20}}>고양이들🐱</h2>

            <Button onClick={refresh}>새로고침</Button>
            {isFetching && <div>로딩중...🙀</div>}
            {!isFetching&& data && (
            <List>
                {data.map(({ id, url }) => {
                    return (
                        <Item key={id} onClick={handleOpenModal}>
                            <Image src={url} alt={id} />
                        </Item>
                    )
                })} 
            </List>
            )}
            <Modal isOpen={isOpen} shouldCloseOnOverlayClick={true} onRequestClose={handleCloseModal}></Modal>
        </Container>
    )
}

export default Cats;