package dev.sena.credikfam.funcionario;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FuncionarioServiceImpl implements FuncionarioService {

    private final FuncionarioRepository funcionarioRepository;
    private final FuncionarioMapper funcionarioMapper;

    public FuncionarioServiceImpl(FuncionarioRepository funcionarioRepository, FuncionarioMapper funcionarioMapper) {
        this.funcionarioRepository = funcionarioRepository;
        this.funcionarioMapper = funcionarioMapper;
    }

    @Override
    public List<FuncionarioDto> findAll() {
        List<Funcionario> funcionarios = funcionarioRepository.findAll();
        return funcionarios.stream()
                .map(funcionarioMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public FuncionarioDto findById(Long id) {
        Funcionario funcionario = funcionarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funcionario not found"));
        return funcionarioMapper.toDto(funcionario);
    }

    @Override
    public FuncionarioDto save(FuncionarioDto funcionarioDto) {
        Funcionario funcionario = funcionarioMapper.toEntity(funcionarioDto);
        funcionario = funcionarioRepository.save(funcionario);
        return funcionarioMapper.toDto(funcionario);
    }

    @Override
    public void delete(Long id) {
        funcionarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funcionario no existe"));

        funcionarioRepository.deleteById(id);
    }
}
