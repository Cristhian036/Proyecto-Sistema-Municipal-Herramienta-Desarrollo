package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import model.Multa;
import service.MultaService;

@RestController
@RequestMapping("/api/multas")
public class MultaController {
    @Autowired
    private MultaService multaService;

    @GetMapping
    public List<Multa> getAllMultas() {
        return multaService.getAllMultas();
    }

    @GetMapping("/{id}")
    public Multa getMultaById(@PathVariable Long id) {
        return (Multa) multaService.getMultaById(id);
    }

    @PostMapping
    public Multa createMulta(@RequestBody Multa multa) {
        return (Multa) multaService.saveMulta(multa);
    }

    @DeleteMapping("/{id}")
    public void deleteMulta(@PathVariable Long id) {
        multaService.deleteMulta(id);
    }
}
