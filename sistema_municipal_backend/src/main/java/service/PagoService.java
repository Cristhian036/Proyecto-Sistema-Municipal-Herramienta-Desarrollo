/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package service;

/**
 *
 * @author lenovo
 */

import model.Pago;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.PagoRepository;

@Service
public class PagoService {
    @Autowired
    private PagoRepository pagoRepository;

    public Pago savePago(Pago pago) {
        return pagoRepository.save(pago);
    }
}
