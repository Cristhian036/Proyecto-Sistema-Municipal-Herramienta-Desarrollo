/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package service;

/**
 *
 * @author lenovo
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import model.Multa;
import repository.MultaRepository;

@Service
public class MultaService {
    @Autowired
    private MultaRepository multaRepository;

    public List<Multa> getAllMultas() {
        return multaRepository.findAll();
    }

    public Multa getMultaById(Long id) {
        return multaRepository.findById(id).orElse(null);
    }

    public Multa saveMulta(Multa multa) {
        return multaRepository.save(multa);
    }

    public void deleteMulta(Long id) {
        multaRepository.deleteById(id);
    }
}

