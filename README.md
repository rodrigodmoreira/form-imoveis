# Trabalho prático 1 - Engenharia de Software
Formulário de criação de imóvel

## Postgresql cheatsheet:

```shell
# Inicialização
sudo service postgresql start

# Login como postgres
sudo -u postgres psql

# Criar/dropar banco do terminal
createdb "db_name"
dropdb "db_name"

# Rodar script sob banco
psql "db_name" < "script_path"

# Terminal PSQL
\l                    # listar bancos
\c "db_name"          # conectar em banco
\dt                   # listar tabelas
\password "username"  # mudar senha
\q                    # quit
```
