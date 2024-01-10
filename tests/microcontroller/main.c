#include <16F877A.h>
#device ADC = 10
#include <stdio.h>
#use DELAY(CLOCK = 4M)
#fuses XT, NOPROTECT, NOWDT
#use RS232(baud = 9600, parity = N, xmit = pin_c6, rcv = pin_c7, bits = 8)

void main()
{
    int16 sensorRTD; //, sensorPinA1, sensorPinA2, sensorPinA3;
    float datosRTD;  //, datosPinA1, datosPinA2, datosPinA3;
    // float mediaSensores, sumaSensores;
    char input;

    /* setup_adc_ports(AN1);
    setup_adc_ports(AN2);
    setup_adc_ports(AN3); */
    setup_adc_ports(all_analog);
    setup_adc(adc_clock_internal);

    while (true)
    {
        set_adc_channel(0);
        delay_us(200);
        sensorRTD = read_adc();
        datosRTD = (sensorRTD * 5.0) / 1023.0;
        // printf("\r\nValor de entrada: %c\r\n", input);
        // printf("\r%4Ld\r\n", sensorRTD);
        printf("\r%0.2f\r\n", datosRTD);
        break;
    }
}
