package ru.spring.boot_security.demo.service;

import org.springframework.stereotype.Service;
import ru.spring.boot_security.demo.dao.RoleDao;
import ru.spring.boot_security.demo.model.Role;

import java.util.List;
import java.util.Set;

@Service
public class RoleServiceImpl implements RoleService {
    private final RoleDao roleDAO;

    public RoleServiceImpl(RoleDao roleDAO) {
        this.roleDAO = roleDAO;
    }


    @Override
    public Set<Role> findRoles(List<Long> ids) {
        return roleDAO.findRoles(ids);
    }
    @Override
    public List<Role> getAllRoles() {
        return roleDAO.getAllRoles();
    }
}
