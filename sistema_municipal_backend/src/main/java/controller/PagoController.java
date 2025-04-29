/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

/**
 *
 * @author lenovo
 */


import model.Pago;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.PagoService;

@RestController
@RequestMapping("/api/pagos")
public class PagoController {
    @Autowired
    private PagoService pagoService;

    @PostMapping
    public Pago createPago(@RequestBody Pago pago) {
        return (Pago) pagoService.savePago(pago);
    }
}
