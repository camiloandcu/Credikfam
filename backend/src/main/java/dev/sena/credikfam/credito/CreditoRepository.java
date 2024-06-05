package dev.sena.credikfam.credito;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CreditoRepository extends JpaRepository<Credito, Long> {
    List<Credito> findByAprobado(Boolean aprobado);
}
