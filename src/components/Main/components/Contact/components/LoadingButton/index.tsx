import { ButtonLoading } from "./styles";

export function LoadingButton() {
    return (
        <ButtonLoading>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </ButtonLoading>
    );
}
