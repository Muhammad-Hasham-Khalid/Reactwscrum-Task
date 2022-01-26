import styled from "@emotion/styled";

interface CBadgeProps {
    content: string;
}

const Cbadge = ({ content }: CBadgeProps) => {
    return <CbadgeStyled>
        {content}
    </CbadgeStyled>
};

const CbadgeStyled = styled.div`
    background-color: #F5F5F5;
    border-radius: 20px;
    width: 150px;
    padding: 8px 5px;
    text-align: center;
    color: #6F6E73;
    margin: 0 auto;
`

export default Cbadge;
