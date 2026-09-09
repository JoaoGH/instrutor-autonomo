import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Simulator from '../Simulator';

describe('Simulator Component', () => {
  it('deve renderizar o título e o formulário do simulador', () => {
    render(<Simulator />);

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ex: mariana silva/i)).toBeInTheDocument();
  });

  it('deve atualizar a mensagem de preview e o link do WhatsApp ao digitar o nome do aluno', () => {
    render(<Simulator />);

    const inputName = screen.getByPlaceholderText(/ex: mariana silva/i);
    fireEvent.change(inputName, { target: { value: 'Maria Silva' } });

    expect(inputName).toHaveValue('Maria Silva');

    const whatsappLink = screen.getByRole('link', {
      name: /enviar solicitação direto no whatsapp/i,
    });
    expect(whatsappLink).toHaveAttribute('href');
    expect(decodeURIComponent(whatsappLink.getAttribute('href'))).toContain('Maria Silva');
  });

  it('deve permitir trocar o serviço selecionado no Passo 1', () => {
    render(<Simulator />);

    const buttonReforco = screen.getByRole('button', { name: /reforço detran\/rs/i });
    fireEvent.click(buttonReforco);

    const whatsappLink = screen.getByRole('link', {
      name: /enviar solicitação direto no whatsapp/i,
    });
    expect(decodeURIComponent(whatsappLink.getAttribute('href'))).toContain(
      'Reforço Focado no Exame Prático Detran/RS'
    );
  });

  it('deve atualizar o período e a transmissão ao selecionar novas opções', () => {
    render(<Simulator />);

    const selectPeriod = screen.getByLabelText(/melhor período/i);
    const selectTransmission = screen.getByLabelText(/preferência de veículo/i);

    fireEvent.change(selectPeriod, { target: { value: selectPeriod.options[1].value } });
    fireEvent.change(selectTransmission, {
      target: { value: selectTransmission.options[1].value },
    });

    const whatsappLink = screen.getByRole('link', {
      name: /enviar solicitação direto no whatsapp/i,
    });
    expect(whatsappLink.getAttribute('href')).toContain('https://wa.me/');
  });
});
