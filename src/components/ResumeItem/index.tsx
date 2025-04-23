
import * as C from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    const formatted = absValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });
    return value < 0 ? `- ${formatted}` : formatted;
};

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>{formatCurrency(value)}</C.Info>
        </C.Container>
    );

}